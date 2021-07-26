export default interface WishlistItemEntity {
  /**
   * Author user id
   */
  uid: string;
  /**
   * The main name of wish
   */
  name: string
  /**
   * Additional comment of wish
   */
  description: string | null
  cost: number | null
  /**
   * firebase server timestamp
   */
  createdAt: any
  /**
   * link to shop where to buy this item
   */
  link: string | null
  private: boolean
  tags: Array<string>

}
