import germanMessages from 'ra-language-german';

germanMessages.ra.auth.auth_check_error = 'Login erforderlich';
germanMessages.ra.notification.logged_out = 'Zugriff verweigert';
germanMessages.ra.page.loading = 'Laden';

const messages = {
    ...germanMessages,
    menu: {
        members: 'Mitglieder',
        events: 'Veranstaltungen',
        internal: 'Intern',
        other: 'Weitere'
    },
    error: {
        login: {
            noAdmin: 'Login fehlgeschlagen'
        }
    },
    resources: {
        events: {
            name: 'Veranstaltung |||| Veranstaltungen',
            fields: {
                eventId: 'ID',
                startDate: 'Start',
                endDate: 'Ende',
                summary: 'Zusammenfassung',
                description: 'Beschreibung',
                eventName: 'Event Name',
                location: 'Ort',
                address: 'Adresse',
                postcode: 'PLZ',
                town: 'Stadt',
                dress: 'Kleidung',
                participatingGroup: 'Bereich',
                category: 'Kategorie',
                isPublic: 'Öffentlich',
                creationDate: 'Erstellt',
                updateDate: 'Aktualisiert',
                version: 'Version',
            },
        },
        members: {
            name: 'Mitglied |||| Mitglieder',
            fields: {
                memberId: 'ID',
                firstName: 'Vorname',
                lastName: 'Nachname',
                email: 'E-Mail',
                performanceCount: 'Anzahl der Auftritte',
                sectionId: 'Register ID',
                password: 'Passwort',
                creationDate: 'Erstellt',
                updateDate: 'Aktualisiert',
                version: 'Version',
                isDeleted: 'ist Gelöscht'
            },
        },
        sections: {
            name: 'Register |||| Register',
            fields: {
                sectionId: 'ID',
                sectionName: 'Register Name',
                creationDate: 'Erstellt',
                updateDate: 'Aktualisiert',
                version: 'Version',
            },
        },
        roles: {
            name: 'Rolle |||| Rollen',
            fields: {
                roleId: 'ID',
                roleName: 'Rollen Name',
                creationDate: 'Erstellt',
                updateDate: 'Aktualisiert',
                version: 'Version',
            },
        },
        devices: {
            name: 'Handy |||| Handys',
            fields: {
                deviceId: 'ID',
                registrationId: 'Regisrierungs ID',
                deviceType: 'Gerätetyp',
                memberId: "Mitglied",
                creationDate: 'Erstellt',
                updateDate: 'Aktualisiert',
                version: 'Version',
            },
        },
        anniversaries: {
            name: 'Jubiläum |||| Jubiläen',
            fields: {
                anniversaryId: 'ID',
                performanceCount: 'Anzahl der Auftritte',
                memberId: 'Mitglied',
                eventId: 'Veranstaltung',
                creationDate: 'Erstellt',
                updateDate: 'Aktualisiert',
                version: 'Version',
            },
        },
        "participation-states": {
            name: 'Teilnahmestatus |||| Teilnahmestatie',
            fields: {
                stateId: 'ID',
                stateName: 'Bezeichnung',
                creationDate: 'Erstellt',
                updateDate: 'Aktualisiert',
                version: 'Version',
                stateName0: 'Nicht Eingeladen',
                stateName1: 'Eingeladen',
                stateName2: 'Zugesagt',
                stateName3: 'Abgesagt',
                stateName4: 'Einladung Angefragt',
                stateName5: 'Einladung Abgelehnt',
                stateName6: 'Nicht Teilgenommen',
                stateName7: 'Teilgenommen',
            },
        },
        participations: {
            name: 'Teinahme |||| Teinahmen',
            fields: {
                id: 'ID',
                performanceCount: 'Anzahl der Auftritte',
                memberId: 'Mitglied',
                eventId: 'Veranstaltung',
                stateId: 'Status',
                creationDate: 'Erstellt',
                updateDate: 'Aktualisiert',
                version: 'Version',
            },
        },
        misc: {
            name: 'Misc'
        }
    },
    customRoutes: {
        privacyPolicy: {
            name: 'Datenschutzhinweise'
        },
        termsAndConditions: {
            name: 'Nutzungshinweise'
        },
        passwordReset: {
            name: 'Password zurück setzen'
        },
        contact: {
            name: 'Kontakt'
        }
    }
    // post: {
    //     list: {
    //         search: 'Search',
    //     },
    //     form: {
    //         summary: 'Summary',
    //         body: 'Body',
    //         miscellaneous: 'Miscellaneous',
    //         comments: 'Comments',
    //     },
    //     edit: {
    //         title: 'Post "%{title}"',
    //     },
    //     action: {
    //         save_and_add: 'Save and Add',
    //         save_and_show: 'Save and Show',
    //     },
    // },
};

export default messages;
