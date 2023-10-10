import type { Prisma, UserExample } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.UserExampleCreateArgs>({
  userExample: {
    one: { data: { email: 'String1094565' } },
    two: { data: { email: 'String2252661' } },
  },
})

export type StandardScenario = ScenarioData<UserExample, 'userExample'>
