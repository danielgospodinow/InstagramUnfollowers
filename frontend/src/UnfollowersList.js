import React from 'react'
import { List, Image, Container, Segment } from 'semantic-ui-react'

class UnfollowersList extends React.Component
{
  constructor(props)
  {
    super(props)

    this.state = {
      unfollowers: this.props.unfollowersList //[{"full_name":"\u0413.\u0418\u0432\u0430\u043d\u043e\u0432","has_anonymous_profile_picture":false,"is_favorite":false,"is_private":true,"is_verified":false,"latest_reel_media":1527108043,"pk":1962427297,"profile_pic_id":"1781370220378018646_1962427297","profile_pic_url":"https://instagram.fsof3-1.fna.fbcdn.net/vp/907aad5e93605f96456bfded7ab9c658/5B7FCE2A/t51.2885-19/s150x150/32203063_577758215921835_13165101259423744_n.jpg","username":"genadi.ivanov"},{"full_name":"Brooklyn Hillenbrand","has_anonymous_profile_picture":false,"is_favorite":false,"is_private":false,"is_verified":false,"latest_reel_media":1527105811,"pk":10341830,"profile_pic_id":"1770695666088234103_10341830","profile_pic_url":"https://instagram.fsof3-1.fna.fbcdn.net/vp/af55fd14144dd5516901ada3a88a07e5/5B92E132/t51.2885-19/s150x150/31016806_120770438787431_5380380216885510144_n.jpg","username":"brooklynhillfit"},{"full_name":"\u041a\u0430\u0440\u0430\u043a\u0435\u0442 \u0410\u0440\u0438\u044d\u043b\u044c","has_anonymous_profile_picture":false,"is_favorite":false,"is_private":false,"is_verified":false,"latest_reel_media":1527108881,"pk":5897566185,"profile_pic_id":"1606539247467243975_5897566185","profile_pic_url":"https://instagram.fsof3-1.fna.fbcdn.net/vp/fc7faa00dbbaa79316ed264d499fc49a/5BA3D575/t51.2885-19/s150x150/21690715_487030161660611_1711960220290252800_n.jpg","username":"ariel.caracat"},{"full_name":"Preslava","has_anonymous_profile_picture":false,"is_favorite":false,"is_private":false,"is_verified":false,"latest_reel_media":1527073198,"pk":350530218,"profile_pic_id":"1704598569313303605_350530218","profile_pic_url":"https://instagram.fsof3-1.fna.fbcdn.net/vp/49ec565b943d13d86506b04d73ec7ee0/5B920991/t51.2885-19/s150x150/26372533_403124986795568_4169655839818252288_n.jpg","username":"preslava__"},{"full_name":"Priyanka Chopra","has_anonymous_profile_picture":false,"is_favorite":false,"is_private":false,"is_verified":true,"latest_reel_media":1527104412,"pk":178537482,"profile_pic_id":"1614093724030283089_178537482","profile_pic_url":"https://instagram.fsof3-1.fna.fbcdn.net/vp/059823521e86a898db18dc2ecf62bf93/5BC2428D/t51.2885-19/s150x150/21911419_1949759908620785_2593205011697631232_n.jpg","username":"priyankachopra"},{"full_name":"Marvel LATAM","has_anonymous_profile_picture":false,"is_favorite":false,"is_private":false,"is_verified":true,"pk":3112827563,"profile_pic_id":"1464584150127437713_3112827563","profile_pic_url":"https://instagram.fsof3-1.fna.fbcdn.net/vp/36f0778c628abecff95778a0ec444bc6/5B895BD5/t51.2885-19/17075922_658426227678944_6377906016561922048_a.jpg","username":"marvellatam"},{"full_name":"Acquire More Followers Now \ud83d\udcaf","has_anonymous_profile_picture":false,"is_favorite":false,"is_private":false,"is_verified":false,"pk":3485850558,"profile_pic_id":"1761866714897663948_3485850558","profile_pic_url":"https://instagram.fsof3-1.fna.fbcdn.net/vp/9a6a2ca3cf4bd11b33f537f2a1b4be44/5B939FA5/t51.2885-19/s150x150/30593191_197671794369145_8133578781903290368_n.jpg","username":"have.real.fans_527"},{"full_name":"TheParablesGang(TPG)","has_anonymous_profile_picture":false,"is_favorite":false,"is_private":false,"is_verified":false,"pk":5401904134,"profile_pic_id":"1505158594570508499_5401904134","profile_pic_url":"https://instagram.fsof3-1.fna.fbcdn.net/vp/b37f88e720a3ad068820e590f65edc16/5BA2B791/t51.2885-19/s150x150/19228699_487103054967130_6257834905812598784_n.jpg","username":"fashionparables"},{"full_name":"Leo Messi","has_anonymous_profile_picture":false,"is_favorite":false,"is_private":false,"is_verified":true,"latest_reel_media":1527082126,"pk":427553890,"profile_pic_id":"1555261095060878384_427553890","profile_pic_url":"https://instagram.fsof3-1.fna.fbcdn.net/vp/5e6cb24328913c77dfea1b83f76ea626/5B95101A/t51.2885-19/s150x150/19954949_2034459183451323_7136569748396965888_a.jpg","username":"leomessi"},{"full_name":"Jason Statham","has_anonymous_profile_picture":false,"is_favorite":false,"is_private":false,"is_verified":true,"pk":1777543238,"profile_pic_id":"1278638287928598250_1777543238","profile_pic_url":"https://instagram.fsof3-1.fna.fbcdn.net/vp/e4683b97794d2c0d4d69cf52e3d8070a/5B8EE72D/t51.2885-19/s150x150/13402224_561313060714843_108117413_a.jpg","username":"jasonstatham"},{"full_name":"Arnold Schwarzenegger","has_anonymous_profile_picture":false,"is_favorite":false,"is_private":false,"is_verified":true,"pk":198945880,"profile_pic_url":"https://instagram.fsof3-1.fna.fbcdn.net/vp/eac57b9f0ced93541758b5769a6db55a/5B89D225/t51.2885-19/s150x150/12964988_243704659317412_177347800_a.jpg","username":"schwarzenegger"},{"full_name":"Robert Downey Jr.","has_anonymous_profile_picture":false,"is_favorite":false,"is_private":false,"is_verified":true,"pk":1518284433,"profile_pic_id":"1782540999999239732_1518284433","profile_pic_url":"https://instagram.fsof3-1.fna.fbcdn.net/vp/739fd3b009c288fe7c1de3264358aa45/5BC19694/t51.2885-19/s150x150/32948218_245304006216975_2128799732808548352_n.jpg","username":"robertdowneyjr"},{"full_name":"Vin Diesel","has_anonymous_profile_picture":false,"is_favorite":false,"is_private":false,"is_verified":true,"pk":1287006597,"profile_pic_url":"https://instagram.fsof3-1.fna.fbcdn.net/vp/68fbb61bf01eae99f1e373bb0aa3b288/5B873AAF/t51.2885-19/10413817_608170499301051_469650117_a.jpg","username":"vindiesel"},{"full_name":"therock","has_anonymous_profile_picture":false,"is_favorite":false,"is_private":false,"is_verified":true,"pk":232192182,"profile_pic_url":"https://instagram.fsof3-1.fna.fbcdn.net/vp/5c6d4b18b0bbc29a924dd62f15bebef5/5BC26EFC/t51.2885-19/11850309_1674349799447611_206178162_a.jpg","username":"therock"},{"full_name":"\u0414\u0430\u043d\u0438\u0435\u043b \u0413\u043e\u0441\u043f\u043e\u0434\u0438\u043d\u043e\u0432","has_anonymous_profile_picture":false,"is_favorite":false,"is_private":false,"is_verified":false,"pk":462749157,"profile_pic_id":"1751860463719967439_462749157","profile_pic_url":"https://instagram.fsof3-1.fna.fbcdn.net/vp/5589da895cd2b122e8ebeb608a0ba5e6/5BA31703/t51.2885-19/s150x150/30077583_1256866727778713_482947301245976576_n.jpg","username":"danielgospodinow"}] //this.props.unfollowersList
    }
  }
  
  onItemClick()
  {
    console.log("pressed a button")
  }

  render() {
    const { unfollowers } = this.state;

    return (
      <div>
        <Container style={{width: "500px", marginTop:"1%", marginBottom:"1%"}} >
          <Segment.Group raised>
            {unfollowers.map(unfollower =>
              <Segment key={ unfollower.pk }>
                <List selection verticalAlign='middle' size='medium' onClick={ this.onItemClick.bind(this) }>
                  <List.Item as='a'>
                    <Image avatar src={ unfollower.profile_pic_url }/>
                    <List.Content>
                      <List.Header> { unfollower.username } </List.Header>
                      <List.Description> { unfollower.full_name } </List.Description>
                    </List.Content>
                  </List.Item>
                </List>
              </Segment>
            )}
          </Segment.Group>
        </Container>
      </div>
    );
  }
}

export default UnfollowersList