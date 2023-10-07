import { UrlBuilder } from "./UrlBuilder";

export const ResourceNames = {
  members: "members",
  statisticsEntries: "statisticsEntries",
  statisticsParticipations: "statisticsParticipations",
  events: "events",
  misc: "misc",
  participations: "participations",
  participationStates: "participation-states",
  roles: "roles",
  fcm: "fcm",
  auth: "auth",
  devices: "devices",
  sections: "sections",
  statisticsDeletionProtocols: "statisticsDeletionProtocols",
  anniversaries: "anniversaries",
};

export class API_URLS {
  static event = {
    byId: (eventId: number) =>
      UrlBuilder.at(ResourceNames.events).addPath(eventId.toString()),
    // many: UrlBuilder.at(ResourceNames.events).addCustomFilter("startDate", determineStartDateFilter(), "gt"),
  };

  static member = {
    byId: (memberId: number) =>
      UrlBuilder.at(ResourceNames.members)
        .addPath(memberId.toString())
        .addQueryParameter("join", ResourceNames.roles)
        .addQueryParameter("join", "section"),
    many: UrlBuilder.at(ResourceNames.members),
    ofSection: (sectionId: number) =>
      UrlBuilder.at(ResourceNames.members)
        .addFilter("sectionId", sectionId)
        .addQueryParameter("join", ResourceNames.devices)
        .addQueryParameter("join", ResourceNames.roles)
        .addQueryParameter("join", "section"),
  };

  static section = {
    many: UrlBuilder.at(ResourceNames.sections),
  };

  static statisticsEntry = {
    createFromEvent: UrlBuilder.at(ResourceNames.statisticsEntries).addPath(
      "fromEvent"
    ),
    byId: (id: number) =>
      UrlBuilder.at(ResourceNames.statisticsEntries).addPath(id.toString()),
    // many: (filter: StatisticsEntryFilter) => {
    //     const urlBuilder = UrlBuilder.at(ResourceNames.statisticsEntries).sortBy("date", "ASC");
    //
    //     if (filter.isProcessed !== undefined) {
    //         urlBuilder.addFilter("isProcessed", filter.isProcessed);
    //     }
    //
    //     if (filter.sections.length > 0) {
    //         urlBuilder.addArrayFilter(
    //             "sectionId",
    //             filter.sections.map(it => it.sectionId),
    //         );
    //     }
    //
    //     if (filter.eventId !== undefined) {
    //         urlBuilder.addFilter("eventId", filter.eventId);
    //     }
    //     return urlBuilder;
    // },
  };

  static statisticsParticipation = {
    many: (statisticsEntryId: number) =>
      UrlBuilder.at(ResourceNames.statisticsParticipations)
        .addFilter("statisticsEntryId", statisticsEntryId)
        .addQueryParameter("join", "member"),
    createMany: UrlBuilder.at(ResourceNames.statisticsParticipations).addPath(
      "bulk"
    ),
    byId: (id: number) =>
      UrlBuilder.at(ResourceNames.statisticsParticipations).addPath(
        id.toString()
      ),
  };

  static misc = {
    fzSrbAppStoreLinks: UrlBuilder.at(ResourceNames.misc).addPath(
      "fzSrbAppStoreLinks"
    ),
  };

  static participations = {
    remind: UrlBuilder.at(ResourceNames.fcm).addPath("remindParticipators"),
    createMany: UrlBuilder.at(ResourceNames.participations).addPath("bulk"),
    own: (eventId: number, memberId: number) =>
      UrlBuilder.at(ResourceNames.participations)
        .addQueryParameter("join", "participationState")
        .addFilter("eventId", eventId)
        .addFilter("memberId", memberId),
    many: (eventId: number, memberIds: number[]) =>
      UrlBuilder.at(ResourceNames.participations)
        .addQueryParameter("join", "participationState")
        .addFilter("eventId", eventId)
        .addArrayFilter("memberId", memberIds),
  };

  static participationStates = {
    many: UrlBuilder.at(ResourceNames.participationStates),
  };
  static auth = {
    login: UrlBuilder.at(ResourceNames.auth).addPath("login"),
    refresh: UrlBuilder.at(ResourceNames.auth).addPath("refresh"),
    resetPassword: (email: string) =>
      UrlBuilder.at(ResourceNames.auth)
        .addPath("forgot-password")
        .addPath(email),
  };
  static devices = {
    many: UrlBuilder.at(ResourceNames.devices),
    byId: (id: number) =>
      UrlBuilder.at(ResourceNames.devices).addPath(id.toString()),
    byRegistrationId: (registrationId: string) =>
      UrlBuilder.at(ResourceNames.devices).addFilter(
        "registrationId",
        registrationId
      ),
  };
}
