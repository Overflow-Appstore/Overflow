# Incident Response Playbook

## Severity Levels
- **SEV0**: Platform-wide outage, data breach, or security compromise. Immediate response, notify leadership and legal.
- **SEV1**: Core feature degraded (auth, donations, messaging). Response within 15 minutes; status page update.
- **SEV2**: Partial feature impact or elevated error rates. Response within 1 hour.
- **SEV3**: Minor bugs or cosmetic issues. Track in backlog.

## Roles
- **Incident Commander**: Leads response, coordinates updates.
- **Communications Lead**: Handles status page, stakeholder updates.
- **Engineering Lead**: Diagnoses and resolves technical issues.
- **Safety Lead**: Activated when abuse or security concerns are involved.

## First Response Steps
1. Confirm the incident and assign severity.
2. Page the incident channel in Slack (`#incidents-overflow`).
3. Assign roles.
4. Stabilize: rollback, feature flag, or disable impacted functionality.
5. Communicate: update status page, notify support, draft user messaging if needed.
6. Document timeline in shared incident doc.
7. After resolution, conduct a post-incident review within 5 business days.
