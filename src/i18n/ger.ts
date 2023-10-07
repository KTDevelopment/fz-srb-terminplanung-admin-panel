// @ts-ignore
import germanMessages from "ra-language-german";

germanMessages.ra.auth.auth_check_error = "Login erforderlich";
germanMessages.ra.notification.logged_out = "Zugriff verweigert";
germanMessages.ra.page.loading = "Laden";
germanMessages.ra.configurable = {
  customize: "konfigurierbar",
};

const messages = {
  ...germanMessages,
  menu: {
    members: "Mitglieder",
    events: "Veranstaltungen",
    internal: "Intern",
    statistics: "Statistik",
    other: "Weitere",
  },
  error: {
    login: {
      noAdmin: "Login fehlgeschlagen",
    },
  },
  resources: {
    events: {
      name: "Veranstaltungen",
      fields: {
        eventId: "ID",
        startDate: "Start",
        endDate: "Ende",
        summary: "Zusammenfassung",
        description: "Beschreibung",
        eventName: "Event Name",
        location: "Ort",
        address: "Adresse",
        postcode: "PLZ",
        town: "Stadt",
        dress: "Kleidung",
        participatingGroup: "Bereich",
        category: "Kategorie",
        isPublic: "Öffentlich",
        creationDate: "Erstellt",
        updateDate: "Aktualisiert",
        version: "Version",
      },
    },
    members: {
      name: "Mitglieder",
      fields: {
        memberId: "ID",
        firstName: "Vorname",
        lastName: "Nachname",
        email: "E-Mail",
        performanceCount: "Anzahl der Auftritte",
        sectionId: "Register ID",
        password: "Passwort",
        creationDate: "Erstellt",
        updateDate: "Aktualisiert",
        version: "Version",
        isDeleted: "ist Gelöscht",
      },
    },
    sections: {
      name: "Register",
      fields: {
        sectionId: "ID",
        sectionName: "Register Name",
        creationDate: "Erstellt",
        updateDate: "Aktualisiert",
        version: "Version",
      },
    },
    roles: {
      name: "Rollen",
      fields: {
        roleId: "ID",
        roleName: "Rollen Name",
        creationDate: "Erstellt",
        updateDate: "Aktualisiert",
        version: "Version",
      },
    },
    devices: {
      name: "Handys",
      fields: {
        deviceId: "ID",
        registrationId: "Regisrierungs ID",
        deviceType: "Gerätetyp",
        memberId: "Mitglied",
        creationDate: "Erstellt",
        updateDate: "Aktualisiert",
        version: "Version",
      },
    },
    anniversaries: {
      name: "Jubiläen",
      fields: {
        anniversaryId: "ID",
        performanceCount: "Anzahl der Auftritte",
        memberId: "Mitglied",
        statisticsEntryId: "Statistik Eintrag",
        creationDate: "Erstellt",
        updateDate: "Aktualisiert",
        version: "Version",
      },
    },
    "participation-states": {
      name: "Teilnahmestatus",
      fields: {
        stateId: "ID",
        stateName: "Bezeichnung",
        creationDate: "Erstellt",
        updateDate: "Aktualisiert",
        version: "Version",
        stateName0: "Nicht Eingeladen",
        stateName1: "Eingeladen",
        stateName2: "Zugesagt",
        stateName3: "Abgesagt",
        stateName4: "Einladung Angefragt",
        stateName5: "Einladung Abgelehnt",
        stateName6: "Nicht Teilgenommen",
        stateName7: "Teilgenommen",
      },
    },
    participations: {
      name: "Teinahmen",
      fields: {
        id: "ID",
        performanceCount: "Anzahl der Auftritte",
        memberId: "Mitglied",
        eventId: "Veranstaltung",
        stateId: "Status",
        creationDate: "Erstellt",
        updateDate: "Aktualisiert",
        version: "Version",
      },
    },
    misc: {
      name: "Misc",
    },
    statisticsDeletionProtocols: {
      name: "Löschprotokolle",
      fields: {
        id: "ID",
        memberId: "Mitglied",
        statisticsEntryId: "Statistik Eintag",
        performanceCount: "Anzahl der Auftritte",
        deletingMemeberName: "gelöscht von",
        creationDate: "Erstellt",
        updateDate: "Aktualisiert",
        version: "Version",
      },
    },
    statisticsEntries: {
      name: "Statistik Einträge",
      fields: {
        id: "ID",
        eventId: "Veranstaltung",
        sectionId: "Register",
        date: "Datum",
        locationString: "Ort",
        isProcessed: "ist Abgeschlossen",
        creationDate: "Erstellt",
        updateDate: "Aktualisiert",
        version: "Version",
      },
    },
    statisticsParticipations: {
      name: "Teilnahmen",
      fields: {
        id: "ID",
        memberId: "Mitglied",
        statisticsEntryId: "Statistik Eintag",
        performanceCount: "Anzahl der Auftritte",
        creationDate: "Erstellt",
        updateDate: "Aktualisiert",
        version: "Version",
      },
    },
  },
  customRoutes: {
    privacyPolicy: {
      name: "Datenschutzhinweise",
    },
    termsAndConditions: {
      name: "Nutzungshinweise",
    },
    passwordReset: {
      name: "Password zurück setzen",
    },
    contact: {
      name: "Kontakt",
    },
  },
};

export default messages;
