import React from "react";
import {Resource} from 'react-admin';
import PeopleIcon from '@material-ui/icons/People';
import {SectionsList} from "./SectionsList";
import {SectionShow} from "./SectionShow";
import {SectionEdit} from "./SectionCreateAndEdit/SectionEdit";
import {SectionCreate} from "./SectionCreateAndEdit/SectionCreate";

export const SectionResource = () => <Resource
    name="sections"
    icon={PeopleIcon}
    list={SectionsList}
    show={SectionShow}
    edit={SectionEdit}
    create={SectionCreate}
/>;
