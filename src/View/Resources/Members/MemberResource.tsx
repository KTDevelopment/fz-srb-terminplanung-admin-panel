import React from "react";
import {Resource} from 'react-admin';
import {MembersList} from "./MembersList";
import PersonIcon from '@material-ui/icons/Person';
import {MemberShow} from "./MemberShow";
import {MemberEdit} from "./MemberCreateAndEdit/MemberEdit";
import {MemberCreate} from "./MemberCreateAndEdit/MemberCreate";

export const MemberResource = () => <Resource
    name="members"
    icon={PersonIcon}
    list={MembersList}
    show={MemberShow}
    edit={MemberEdit}
    create={MemberCreate}
/>;
