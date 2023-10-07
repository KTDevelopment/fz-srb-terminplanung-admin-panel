import { ResourceNames } from "./APIDefinitions/apiDefinitions";

export class ResourceMapper {
  static augmentManyResourcesByIdField(resourceType: string, resources: any[]) {
    return resources.map((resource) =>
      ResourceMapper.augmentResourceByIdField(resourceType, resource)
    );
  }

  static augmentResourceByIdField(resourceType: string, resource: any) {
    let augmented = {
      ...resource,
      id: resource[ResourceMapper.getIdKeyForResource(resourceType)],
    };

    return this.transformManyToManyRelationsFromApi(resourceType, augmented);
  }

  static getIdKeyForResource(resourceType: string): string {
    switch (resourceType) {
      case ResourceNames.events:
        return "eventId";
      case ResourceNames.members:
        return "memberId";
      case ResourceNames.sections:
        return "sectionId";
      case ResourceNames.roles:
        return "roleId";
      case ResourceNames.devices:
        return "deviceId";
      case ResourceNames.anniversaries:
        return "anniversaryId";
      case ResourceNames.participationStates:
        return "stateId";
      default:
        return "id";
    }
  }

  static transformManyToManyRelationsFromApi(
    resourceType: string,
    resource: any
  ) {
    switch (resourceType) {
      case ResourceNames.members:
        if (resource.roles) {
          resource.roleIds = resource.roles.map(
            (role: { roleId: any }) => role.roleId
          );
        }
        return resource;
      default:
        return resource;
    }
  }

  static transformManyToManyRelationsToApi(
    resourceType: string,
    resource: any
  ) {
    switch (resourceType) {
      case ResourceNames.members:
        if (resource.roleIds) {
          resource.roles = resource.roleIds.map((id: any) => ({
            roleId: id,
          }));
        }
        return resource;
      default:
        return resource;
    }
  }
}
