import { Moment } from 'moment'
import StrapiClient from 'strapi-client'

const strapi = new StrapiClient('http://localhost:1337/api')

export async function getBirds(): Promise<Bird[]> {
  const { jwt, user } = await strapi.login('josia.nyman', 'bpqx35F8HGr6iBfK') // TODO login UI
  console.log('Token:', jwt)
  console.log('User:', user)

  const birds = await strapi.get('birds', {_limit: 1000, locale: 'fi-FI'})
  console.log('birds')
  console.log(birds)
   return birds.data.map((item: any): Bird => ({
     id: item.id,
     label: item.attributes.name,
     name: item.attributes.name,
   })
   )
}

export async function saveRecord(input: RecordInput): Promise<any> {
  const record = await strapi.create('records', {data: input})
   return record.data
}

export interface Bird {
  id: string,
  label: string,
  name: string,
}

export interface RecordInput {
  bird: string,
  date: Moment,
  user: string,
  labelIds?: string[]
}
