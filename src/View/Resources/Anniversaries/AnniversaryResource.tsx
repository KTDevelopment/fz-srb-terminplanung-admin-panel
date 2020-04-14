import React from "react";
import {Resource} from 'react-admin';
import StarIcon from '@material-ui/icons/Star';
import {AnniversariesList} from "./AnniversariesList";
import {AnniversaryShow} from "./AnniversaryShow";
import {AnniversaryEdit} from "./AnniversaryCreateAndEdit/AnniversaryEdit";
import {AnniversaryCreate} from "./AnniversaryCreateAndEdit/AnniversaryCreate";

export const AnniversaryResource = () => <Resource
    name="anniversaries"
    icon={StarIcon}
    list={AnniversariesList}
    show={AnniversaryShow}
    edit={AnniversaryEdit}
    create={AnniversaryCreate}
/>;
