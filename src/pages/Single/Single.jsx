import { Link } from 'react-router-dom';
import editIcon from '../../images/edit.png';
import deleteIcon from '../../images/delete.png';

import './_Single.scss';
import Menu from '../../components/Menu/Menu';

function Single() {
  return (
    <div className='single'>
      <div className='content'>
        <img
          src='https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compression&cs=tinysrgb&w=1260&h=750&dpr=2'
          alt='post'
        />
        <div className='user'>
          <img
            src='https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compression&cs=tinysrgb&w=1260&h=750&dpr=2'
            alt='user'
          />
          <div className='info'>
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className='edit'>
            <Link to={`/write?edit=2`}>
              <img src={editIcon} alt='' />
            </Link>
          </div>
          <div className='delete'>
            <img src={deleteIcon} alt='' />
          </div>
        </div>
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          ut dolores natus dicta obcaecati laboriosam rem. Soluta facilis fugit
          voluptatibus dolore delectus, placeat aliquam error consectetur eius
          enim cupiditate eveniet.
        </h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam
          quisquam consequatur amet, dignissimos enim architecto non
          exercitationem quasi, voluptatum ab ipsum possimus quibusdam optio
          suscipit, illo quia magnam facilis earum ea iste. Voluptatum soluta
          distinctio possimus. Distinctio saepe at blanditiis necessitatibus sed
          mollitia expedita vel repudiandae eveniet architecto hic eius in
          similique debitis libero quas possimus dolorum, aperiam, error magni!
          Corrupti qui officia similique eligendi molestiae, tempore quod
          commodi repellat placeat quos, ab cumque dolor quibusdam aut
          voluptates ex? Atque illum obcaecati, vel, iure maxime cum eius
          officiis quos recusandae reiciendis molestias iusto, delectus nisi
          facilis aliquam voluptas laudantium provident minus. Pariatur culpa
          vel voluptatem facilis quisquam tempore. Eveniet officiis consectetur
          numquam? Commodi quos nulla praesentium cumque in veritatis fugit
          soluta ipsam, nostrum explicabo atque aut culpa nam animi, labore
          adipisci ab sunt nisi provident dolore impedit rem tempore. Magnam non
          culpa exercitationem fuga eligendi, inventore impedit ut accusantium
          labore esse veritatis minima, quis sint. Rerum officiis reprehenderit
          libero! Sapiente ratione officia culpa aspernatur eligendi, nisi,
          natus itaque enim repudiandae tempora accusamus quo distinctio est qui
          numquam explicabo? Suscipit sapiente odio aut ducimus consequuntur,
          maiores veritatis in itaque quidem rerum laudantium cum consectetur
          corporis! Corrupti, quibusdam. Optio quaerat architecto accusantium
          recusandae culpa, sapiente quas blanditiis ut. In, fugiat corrupti!
          Maiores, inventore expedita dicta eos labore voluptatibus facilis
          libero hic saepe quisquam amet doloremque asperiores, at vero sequi
          ipsam provident reiciendis nam impedit ut! Corrupti vero magni
          necessitatibus sit natus. Quaerat accusantium laudantium aspernatur
          explicabo officia blanditiis sapiente consectetur mollitia eum!
          Molestiae architecto nesciunt accusantium, nam quos soluta alias,
          earum ipsum aliquam, nihil tempora natus quidem nobis cumque. Corporis
          sed repellat commodi tenetur velit esse quo perspiciatis hic
          voluptatum, ipsum ex mollitia provident autem repellendus quibusdam
          eos dolor quasi quos, corrupti libero harum, quia illum. Commodi eius
          accusantium distinctio soluta ad, explicabo reiciendis eaque suscipit
          quaerat consequuntur quasi voluptate odio veritatis eveniet? Nostrum
          molestiae dolorum expedita alias sit culpa accusamus, accusantium,
          laborum libero commodi ratione perferendis, eaque aperiam? Fugiat
          aliquam quibusdam incidunt nam qui ex est similique a eveniet,
          veritatis perspiciatis natus earum facere maiores minus! Magnam
          quaerat laudantium reiciendis dicta, iste odit ea labore corporis sunt
          facere accusantium debitis, doloribus nostrum? A exercitationem
          voluptatem iure quidem voluptates cumque enim neque optio non, aliquam
          nulla! Vero, incidunt labore quidem magnam iste, hic voluptas odit a
          saepe sapiente, quam blanditiis expedita possimus ipsam? Excepturi
          laboriosam iure doloremque totam molestias nisi minima eius?
        </p>
      </div>
      <Menu />
    </div>
  );
}

export default Single;
