/**
 * A class to simplify creating a [Button]{@link MenuButton}.
 */
class ButtonBuilder {
  /**
   * constructor - description  
   *
   * @param  {type} emoji = null    description
   * @param  {type} callback = null description
   * @param  {type} data = null     description
   * @return {type}                 description
   */

  constructor(emoji = null, callback = null, data = null) {
    /**
     * The emoji that is the visual representation of this Button.
     */
    this.Emoji = emoji;
    /**
     * The callback executed when this button is pressed.
     */
    this.Callback = callback;
    /**
     * Optional additional data to pass to this Button's callback.
     */
    this.Data = data;
  }

  /**
   * Sets the emoji of this Button.
   *
   * @param  {string} emoji The emoji that is the visual representation of this Button.
   */
  SetEmoji(emoji) {
    //If the user has passed a raw Discord emoji, turn it into a string.
    if (typeof emoji != "string") emoji = emoji.toString();
    this.Emoji = emoji;
  }

  /**
   * Sets the callback of this Button.
   *
   * @param  {ButtonCallback} callback The callback executed when this button is pressed.
   */
  SetCallback(callback) {
    this.Callback = callback;
  }

  /**
   * Sets the data of this Button.
   *
   * @param  {Object} data Optional additional data to pass to this Button's callback.
   */
  SetData(data) {
    this.Data = data;
  }
}