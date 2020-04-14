export class ResourceMapper {
    static augmentManyResourcesByIdField(resourceType: string, resources) {
        return resources.map(resource => ResourceMapper.augmentResourceByIdField(resourceType, resource))
    }

    static augmentResourceByIdField(resourceType: string, resource) {
        let augmented = {...resource, id: resource[ResourceMapper.getIdKeyForResource(resourceType)]};

        return this.transformManyToManyRelationsFromApi(resourceType, augmented);
    }

    static getIdKeyForResource(resourceType: string): string {
        switch (resourceType) {
            case 'events':
                return 'eventId';
            case 'members':
                return 'memberId';
            case 'sections':
                return 'sectionId';
            case 'roles':
                return 'roleId';
            case 'devices':
                return 'deviceId';
            case 'anniversaries':
                return 'anniversaryId';
            case 'participation-states':
                return 'stateId';
            default:
                return 'id';
        }
    }

    static transformManyToManyRelationsFromApi(resourceType: string, resource) {
        switch (resourceType) {
            case 'members':
                if (resource.roles) {
                    resource.roleIds = resource.roles.map(role =>role.roleId);
                }
                return resource;
            default:
                return resource;
        }
    }

    static transformManyToManyRelationsToApi(resourceType: string, resource) {
        switch (resourceType) {
            case 'members':
                if (resource.roleIds) {
                    resource.roles = resource.roleIds.map(id => ({
                        roleId:id
                    }));
                }
                return resource;
            default:
                return resource;
        }
    }
}
