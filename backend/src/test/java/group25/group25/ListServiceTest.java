package group25.group25;

import group25.group25.list.service.ListService;
import group25.group25.list.serviceImplementation.ListServiceImpl;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;

public class ListServiceTest {
    @Mock
    private ListService listService;

    @InjectMocks
    private ListServiceImpl listController;


}
