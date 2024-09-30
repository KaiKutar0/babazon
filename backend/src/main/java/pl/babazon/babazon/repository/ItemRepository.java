package pl.babazon.babazon.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import pl.babazon.babazon.entity.Item;

@Repository
public interface ItemRepository extends JpaRepository<Item, Long> {
    List<Item> findAllItems();
}
